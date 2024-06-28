document.addEventListener("DOMContentLoaded", function() {
  mermaid.initialize({
      startOnLoad: true,
      theme: "default",
      // Specify ELK options here
      securityLevel: 'loose',
      er: {
          layoutDirection: "TB"
      },
      flowchart: {
          useMaxWidth: true,
          htmlLabels: true,
          curve: "linear",
          diagramPadding: 8,
          nodeSpacing: 50,
          rankSpacing: 50,
          // ELK specific options
          layoutOptions: {
              'elk.algorithm': 'layered',
              'elk.direction': 'DOWN',
              'elk.spacing.nodeNode': '50',
              'elk.layered.spacing.nodeNodeBetweenLayers': '50'
          }
      }
  });
});