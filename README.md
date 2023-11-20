# Projektmanagement-Tool

## Zielsetzung
Entwicklung eines webbasierten Projektmanagement-Tools, das auf Microservice-Architektur basiert und die 12-Faktor-App-Prinzipien befolgt. Ziel ist es, die App in verschiedenen Azure-Diensten zu deployen, um Performance, Kosten und Handhabung zu vergleichen.

## Phase 1: Entwicklung

### Technologieauswahl
- **Backend:** Node.js
- **Frontend:** React
- **Datenbank:** MongoDB
- **Entwicklungsumgebung:** Visual Studio Code
- **Deployment-Technologien (MS Azure):** Kubernetes, Container Apps, Container Instances, App Services

### Funktionen
- **Aufgabenverwaltung:** Erstellen, Anzeigen, Bearbeiten und Löschen von Aufgaben.
- **Projektübersicht:** Anzeigen von Projekten und zugehörigen Aufgaben.
- **Nutzer-Authentifizierung:** Einfache Registrierung und Anmeldung.

### Microservices
- **Authentifizierungs-Service:** Verwaltet Nutzerregistrierung und -anmeldung.
- **Aufgaben-Service:** Verantwortlich für die Aufgabenverwaltung.
- **Projekt-Service:** Handhabt die Projektübersicht und -verwaltung.

## Phase 2: Erweiterung

### Zusätzliche Funktionen
- **Kalenderintegration:** Visualisierung von Aufgaben und Fristen im Kalender.
- **Benachrichtigungen:** Email-Benachrichtigungen für anstehende Aufgaben und Fristen.
- **Berichterstattung:** Erstellung von Projektfortschrittsberichten.

### Verbesserte Microservices
- **Kalender-Service:** Verwaltet die Kalenderintegration.
- **Benachrichtigungs-Service:** Zuständig für das Senden von Benachrichtigungen.
- **Berichts-Service:** Erstellt Berichte und Analysen zum Projektfortschritt.

## Phase 3: Analyse & Deployment

### Deployment-Ziele
- **Vergleich verschiedener Azure-Dienste:** Evaluierung von Kubernetes, Container Apps, Container Instances und App Services hinsichtlich Performance, Kosten und Wartung.
- **Einhaltung der 12-Faktor-App-Prinzipien:** Sicherstellung, dass die App diese Prinzipien befolgt, insbesondere in Bezug auf Konfiguration, Dienste, Portabilität und Skalierbarkeit.

### Evaluierungskriterien
- **Performance:** Antwortzeiten, Verfügbarkeit und Skalierbarkeit.
- **Kosten:** Analyse der Gesamtbetriebskosten in jedem Azure-Dienst.
- **Wartung und Handhabung:** Einfachheit der Wartung und Aktualisierung der App in den verschiedenen Umgebungen.

### Dokumentation
- **Entwicklungsprozess:** Detaillierte Dokumentation der Entwicklungsschritte und -entscheidungen.
- **Vergleichsbericht:** Zusammenfassung der Ergebnisse aus der Evaluierung der verschiedenen Azure-Dienste.
