# Panel de Administración — Old School Regresados

## 1. Setup inicial (solo la primera vez)

### Paso 1 — Activar Firebase Auth

1. Ir a → https://console.firebase.google.com/project/oldschool-2b5f1/authentication/providers
2. Hacer click en **"Comenzar"**
3. Habilitar el proveedor **"Correo electrónico/contraseña"** y guardar

### Paso 2 — Crear tu usuario root

1. Ir a → https://console.firebase.google.com/project/oldschool-2b5f1/authentication/users
2. Click en **"Agregar usuario"**
3. Completar:
   - **Email:** `melonoriaga@gmail.com`
   - **Contraseña:** la que quieras (guardala bien)
4. Click en **"Agregar usuario"**

Listo. Solo existe este usuario. Nadie más puede acceder al panel.

---

## 2. Acceso al panel

| Entorno     | URL de login |
|-------------|--------------|
| **Local**   | http://localhost:5173/admin/login |
| **Producción** | https://oldschool-2b5f1.web.app/admin/login |

Una vez logueado, las secciones disponibles:

| Sección | Local | Producción |
|---------|-------|------------|
| **Leads** | http://localhost:5173/admin/leads | https://oldschool-2b5f1.web.app/admin/leads |
| **Invitaciones** | http://localhost:5173/admin/invites | https://oldschool-2b5f1.web.app/admin/invites |
| **Configuración** | http://localhost:5173/admin/settings | https://oldschool-2b5f1.web.app/admin/settings |

---

## 3. Secciones del panel

### 👥 Leads (`/admin/leads`)

Lista de todos los registros recibidos, paginada de a 20.

- **Punto azul** = lead nuevo (no visto)
- Hacer click en una fila → abre el detalle completo
- Cambiar el estado directamente desde la tabla (dropdown)
- Buscar por nombre, email, ciudad o teléfono
- Filtrar por estado
- Botón **"+ Agregar lead"** → cargar un registro manualmente

**Estados disponibles:**
| Estado | Color |
|--------|-------|
| Nuevo | 🔵 Azul |
| Contactado | 🟡 Amarillo |
| Calificado | 🟣 Violeta |
| Confirmado | 🟢 Verde |
| Descartado | 🔴 Rojo |

---

### 📋 Detalle de lead (`/admin/leads/:id`)

- Editar cualquier campo (nombre, edad, ciudad, email, teléfono, mensaje)
- Cambiar estado
- **Agregar notas internas** con fecha y hora automática
- Eliminar el lead permanentemente

---

### 🔗 Invitaciones (`/admin/invites`)

Acá generás los links de registro de un solo uso.

**Cómo generar un link:**
1. Escribir una etiqueta opcional (ej: "Juan Pérez", "Promo Mayo")
2. Click en **"+ Generar link"**
3. Click en **"Copiar link"** → se copia al portapapeles
4. Compartir el link con la persona

**Reglas del link:**
- Válido por **24 horas** exactas desde que se genera
- **Un solo uso** — se desactiva automáticamente al completar el form
- Si ya fue usado → muestra "🔒 Link ya utilizado"
- Si venció → muestra "⏰ Link expirado"
- Si no existe → muestra "❌ Link inválido"

**Estados:**
| Estado | Significado |
|--------|-------------|
| ✅ Activo | Disponible para usar |
| ✔ Usado | Ya fue completado |
| ⚠ Expirado | Venció (24h) |

---

### ⚙️ Configuración (`/admin/settings`)

Editor del mensaje que se muestra después de que alguien completa el formulario de registro vía invite link.

- **Título** (ej: "¡Registro recibido!")
- **Mensaje** (ej: "Nos ponemos en contacto en las próximas 48hs.")

Incluye vista previa en tiempo real antes de guardar.

---

## 4. Cómo llegan los leads

| Fuente | `source` en Firestore | Descripción |
|--------|----------------------|-------------|
| Botón "POSTULARME" del sitio | `form` | Formulario público del landing page |
| Link de invitación | `invite` | Registro controlado via `/r/:token` |
| Carga manual del admin | `manual` | Agregado desde el panel |

---

## 5. Registro vía invite link

La URL de un link de invitación tiene este formato:

```
https://oldschool-2b5f1.web.app/r/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

La persona que recibe el link:
1. Ve un formulario limpio (sin la estética del sitio principal)
2. Completa: nombre, edad, ciudad, email, teléfono, mensaje
3. Al enviar → ve el mensaje de éxito configurado en `/admin/settings`
4. El link queda inutilizable para cualquier otro intento

---

## 6. Seguridad

- Solo `melonoriaga@gmail.com` puede acceder al panel
- Las Firestore Security Rules están deployadas y bloquean cualquier lectura/escritura no autorizada
- Los leads del formulario público solo pueden **crearse** (nadie puede leerlos sin auth)
- Los invite links solo pueden marcarse como "usados" por quien tenga el token (sin poder leer otros datos)

---

## 7. Deploy

```bash
# Buildear y deployar sitio + reglas
npm run build
npx firebase-tools@latest deploy --project oldschool-2b5f1

# Solo reglas Firestore
npx firebase-tools@latest deploy --only firestore:rules --project oldschool-2b5f1

# Solo hosting
npx firebase-tools@latest deploy --only hosting --project oldschool-2b5f1
```
