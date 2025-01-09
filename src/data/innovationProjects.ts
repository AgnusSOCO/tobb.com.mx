import type { InnovationProject } from '../types';

export const innovationProjects: InnovationProject[] = [
  {
    id: 'firescam-malware',
    title: 'FireScam Malware Disguises as Telegram Premium to Hijack Devices',
    titleEs: 'Malware FireScam se Disfraza de Telegram Premium para Controlar Dispositivos',
    description: 'The FireScam Android malware is a cunning imposter, masquerading as a premium version of Telegram to steal sensitive data and maintain remote control over compromised devices.',
    descriptionEs: 'El malware FireScam para Android se hace pasar por una versión premium de Telegram para robar datos sensibles y mantener control remoto sobre dispositivos comprometidos.',
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80',
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
    technicalDetails: {
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
    }
  },
  {
    id: 'mirai-botnet-four-faith',
    title: 'Mirai Botnet Targets Four-Faith Routers for Evolving DDoS Attacks',
    titleEs: 'El Botnet Mirai Apunta a Routers Four-Faith para Atacar con DDoS Evolutivos',
    description: 'A sophisticated Mirai botnet variant is exploiting a critical vulnerability in Four-Faith industrial routers to launch destructive distributed denial-of-service (DDoS) attacks.',
    descriptionEs: 'Una variante avanzada del botnet Mirai está explotando una vulnerabilidad crítica en los routers industriales Four-Faith para lanzar ataques destructivos de denegación de servicio distribuido (DDoS).',
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhTE3bIh1TuXKvpQH8Z0CyQ3JKpEZz5P5Itjj6zkYwatUvJeCfh-oeGGnNRHN-unji8nqsmrGTbeuvovikAQlkeSm9vkIaVllXSvvt8ISpYbF3FD5UPWAW-bpG52nxvOQtON2xN3WaWNBLH-4G0jsc82fgti13onpWSgKQNI-j_lUKaJPAImjMzvkRMz0m8/s728-rw-e365/router-ddos.png',
    highlights: [
      {
        text: 'Controls 15,000 active IPs daily across key regions',
        textEs: 'Controla 15,000 IPs activas diariamente en regiones clave'
      },
      {
        text: 'Exploits over 20 known vulnerabilities including zero-day flaws',
        textEs: 'Explota más de 20 vulnerabilidades conocidas, incluidas fallas de día cero'
      },
      {
        text: 'Launches DDoS attacks with traffic peaks of 100 Gbps',
        textEs: 'Lanza ataques DDoS con picos de tráfico de 100 Gbps'
      },
      {
        text: 'Targets Four-Faith router models F3x24 and F3x36',
        textEs: 'Apunta a modelos de router Four-Faith F3x24 y F3x36'
      }
    ],
    technicalDetails: {
      content: `## The Threat at a Glance

The botnet, dubbed "gayfemboy" (a term embedded in its offensive source code), controls 15,000 active IPs daily across key regions like China, the U.S., Iran, and Turkey. This malware leverages over 20 known vulnerabilities, including a zero-day flaw (CVE-2024-12856) in Four-Faith routers. Exploiting weak credentials, the botnet infiltrates router models F3x24 and F3x36 to execute DDoS campaigns with traffic peaks of 100 Gbps.

## Key Vulnerabilities

The botnet arsenal spans vulnerabilities as old as CVE-2013-3307 to recent flaws like CVE-2024-8957. Its modus operandi includes:

- Scanning for unprotected devices
- Updating itself autonomously
- Launching swift yet potent DDoS strikes
- Executing attacks lasting 10–30 seconds
- Targeting diverse industries with devastating precision

## A Growing Menace

October and November 2024 saw an alarming escalation in DDoS activities linked to this botnet. This aligns with broader trends, including:

- Recent Mirai malware campaigns exploiting default passwords in Juniper Networks' Session Smart Routers
- Remote code execution vulnerabilities in DigiEver DVRs
- Increasing sophistication in attack patterns
- Wider geographical spread of compromised devices

## Implications for Security

As highlighted by QiAnXin XLab, DDoS attacks have evolved into a dominant cyber threat due to their:

- Stealth capabilities
- Adaptive nature
- Precision targeting
- Combination with emerging vulnerabilities
- Integration with cryptocurrency miners

## Több's Take

At Több, we see this as a wake-up call for industries to fortify their cyber and physical defenses. Our innovative AI-driven cybersecurity solutions are designed to:

- Adapt dynamically to evolving threats
- Protect critical infrastructures from botnets
- Provide real-time threat detection
- Implement automated response mechanisms
- Ensure business continuity

The future demands proactive defense—let Több secure yours.`,
      contentEs: `## La Amenaza en Resumen

El botnet, denominado "gayfemboy" (un término ofensivo incrustado en su código fuente), controla 15,000 IPs activas diariamente en regiones clave como China, EE.UU., Irán y Turquía. Este malware utiliza más de 20 vulnerabilidades conocidas, incluida una falla de día cero (CVE-2024-12856) en los routers Four-Faith. Aprovechando credenciales débiles, el botnet infiltra modelos F3x24 y F3x36 para ejecutar campañas de DDoS con picos de tráfico de 100 Gbps.

## Vulnerabilidades Clave

El arsenal del botnet abarca vulnerabilidades desde CVE-2013-3307 hasta fallas recientes como CVE-2024-8957. Su modus operandi incluye:

- Escanear dispositivos desprotegidos
- Actualizarse autónomamente
- Lanzar ataques DDoS rápidos pero devastadores
- Ejecutar ataques que duran entre 10 y 30 segundos
- Apuntar a industrias diversas con una precisión alarmante

## Una Amenaza en Crecimiento

Octubre y noviembre de 2024 fueron testigos de un aumento preocupante en las actividades de DDoS vinculadas a este botnet. Esto coincide con:

- Campañas recientes de malware Mirai que explotan contraseñas predeterminadas en routers Juniper Networks Session Smart
- Vulnerabilidades de ejecución remota de código en DVRs DigiEver
- Creciente sofisticación en los patrones de ataque
- Mayor dispersión geográfica de dispositivos comprometidos

## Implicaciones para la Seguridad

Como destacó QiAnXin XLab, los ataques DDoS se han convertido en una amenaza cibernética dominante debido a su:

- Capacidades sigilosas
- Naturaleza adaptativa
- Precisión en el objetivo
- Combinación con nuevas vulnerabilidades
- Integración con criptominadores

## La Perspectiva de Több

En Több, vemos esto como un llamado a las industrias para fortalecer sus defensas cibernéticas y físicas. Nuestras soluciones innovadoras de ciberseguridad impulsadas por IA están diseñadas para:

- Adaptarse dinámicamente a amenazas en evolución
- Proteger infraestructuras críticas de botnets
- Proporcionar detección de amenazas en tiempo real
- Implementar mecanismos de respuesta automatizados
- Asegurar la continuidad del negocio

El futuro exige una defensa proactiva. Con Több, asegure su mañana.`
    }
  }
];
