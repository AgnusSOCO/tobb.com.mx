import type { Article } from '../../types/article';

export const firescamArticle: Article = {
  id: 'firescam-malware',
  date: '2025-01-08',
  type: 'security',
  image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80',
  title: 'FireScam Malware Disguises as Telegram Premium to Hijack Devices',
  titleEs: 'Malware FireScam se Disfraza de Telegram Premium para Controlar Dispositivos',
  description: 'The FireScam Android malware is a cunning imposter, masquerading as a premium version of Telegram to steal sensitive data and maintain remote control over compromised devices.',
  descriptionEs: 'El malware FireScam para Android se hace pasar por una versión premium de Telegram para robar datos sensibles y mantener control remoto sobre dispositivos comprometidos.',
  highlights: [
    {
      text: 'Multi-stage attack using dropper APK for payload delivery',
      textEs: 'Ataque en múltiples etapas usando APK dropper para entregar su carga'
    },
    {
      text: 'Monitors notifications, user actions, and clipboard content',
      textEs: 'Monitorea notificaciones, acciones del usuario y contenido del portapapeles'
    },
    {
      text: 'Uses Firebase Cloud Messaging for covert communication',
      textEs: 'Utiliza Firebase Cloud Messaging para comunicaciones encubiertas'
    },
    {
      text: 'Blocks legitimate app updates to maintain persistence',
      textEs: 'Bloquea actualizaciones legítimas para mantener persistencia'
    }
  ],
  tags: ['malware', 'android', 'telegram', 'security'],
  readingTime: 5,
  content: `## Key Threats

### Multi-Stage Attack
FireScam begins with a dropper APK that delivers its main payload, stealing data like messages, notifications, and app activity. It even claims "update ownership," blocking legitimate app updates to stay undetected.

### Widespread Surveillance
The malware monitors:
- Incoming notifications
- User actions
- E-commerce activity
- Clipboard content
- Contacts and SMS
- Call logs

It also displays a fake Telegram login page to steal credentials.

### Persistent Control
FireScam establishes covert communication with its command-and-control server using:
- Firebase Cloud Messaging
- WebSocket connections
- Automated data exfiltration
- Remote command execution

## Why It Matters
FireScam showcases the growing sophistication of phishing attacks, exploiting user trust in legitimate platforms like RuStore to spread malware. By leveraging advanced obfuscation techniques, it evades detection while wreaking havoc on Android devices.

## Több's Take
At Több, we see FireScam as a stark reminder of the evolving cyber threat landscape. Our AI-driven solutions protect against advanced threats like this by combining:
- Proactive cybersecurity
- Physical safeguards
- Future-focused innovation

Trust us to safeguard what matters most.`,
  contentEs: `## Principales Amenazas

### Ataque en Múltiples Etapas
FireScam comienza con un APK de "dropper" que entrega su carga principal, robando datos como mensajes, notificaciones y actividad en aplicaciones. Incluso bloquea actualizaciones legítimas al reclamar "propiedad de actualización," asegurando su persistencia.

### Vigilancia Extensa
El malware monitorea:
- Notificaciones entrantes
- Acciones del usuario
- Actividad de comercio electrónico
- Contenido del portapapeles
- Contactos y SMS
- Registros de llamadas

También muestra una falsa página de inicio de sesión de Telegram para robar credenciales.

### Control Persistente
FireScam establece comunicaciones encubiertas con su servidor de comando y control utilizando:
- Firebase Cloud Messaging
- Conexiones WebSocket
- Exfiltración automatizada de datos
- Ejecución remota de comandos

## Por Qué Importa
FireScam demuestra la creciente sofisticación de los ataques de phishing, explotando la confianza del usuario en plataformas legítimas como RuStore para propagar malware. Con técnicas avanzadas de ofuscación, evade detección mientras compromete dispositivos Android.

## El Enfoque de Több
En Több, vemos a FireScam como un recordatorio del panorama de amenazas en constante evolución. Nuestras soluciones impulsadas por IA protegen contra amenazas avanzadas como esta, combinando:
- Ciberseguridad proactiva
- Salvaguardas físicas
- Innovación enfocada en el futuro

Confíe en Több para proteger lo que más importa.`
};
