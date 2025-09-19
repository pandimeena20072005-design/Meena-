import java.io.File;

import java.io.FileWriter;

import java.io.IOException;

public class PortfolioGenerator {

    public static void main(String[] args) {

        // --- Personal info (from you) ---

        String name = "Pandimeena";

        String dream = "Fashion Designer";

        String hobby = "Drawing";

        // File names to create

        String htmlFile = "index.html";

        String cssFile = "styles.css";

        String jsFile  = "script.js";

        try {

            writeCSS(cssFile);

            writeJS(jsFile, name);

            writeHTML(htmlFile, cssFile, jsFile, name, dream, hobby);

            System.out.println("Portfolio files created successfully:");

            System.out.println(" - " + htmlFile);

            System.out.println(" - " + cssFile);

            System.out.println(" - " + jsFile);

            System.out.println("\nOpen '" + htmlFile + "' in your browser to view the portfolio.");

        } catch (IOException e) {

            System.err.println("Error creating files: " + e.getMessage());

        }

    }

    private static void writeHTML(String htmlFile, String cssFile, String jsFile,

                                  String name, String dream, String hobby) throws IOException {

        String html = "<!DOCTYPE html>\n"

                + "<html lang=\"en\">\n"

                + "<head>\n"

                + "  <meta charset=\"UTF-8\" />\n"

                + "  <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\" />\n"

                + "  <title>" + escape(name) + " - Portfolio</title>\n"

                + "  <link rel=\"stylesheet\" href=\"" + cssFile + "\">\n"

                + "</head>\n"

                + "<body>\n"

                + "  <header class=\"hero\">\n"

                + "    <h1>" + escape(name) + "</h1>\n"

                + "    <p class=\"subtitle\">Dream: <strong>" + escape(dream) + "</strong></p>\n"

                + "  </header>\n"

                + "\n"

                + "  <main class=\"container\">\n"

                + "    <section class=\"about card\">\n"

                + "      <h2>About Me</h2>\n"

                + "      <p>Hi — I'm <strong>" + escape(name) + "</strong>. My dream is to become a <strong>" + escape(dream) + "</strong>. I love <strong>" + escape(hobby) + "</strong> and creating designs.</p>\n"

                + "    </section>\n"

                + "\n"

                + "    <section class=\"work card\">\n"

                + "      <h2>My Drawing / Designs</h2>\n"

                + "      <p>Below is a placeholder for your drawing. Replace the image with your own drawing file when ready.</p>\n                + \"      <div class=\\\"placeholder\\\">Your drawing goes here</div>\\n\"\n"

                + "    </section>\n"

                + "\n"

                + "    <section class=\"contact card\">\n"

                + "      <h2>Contact</h2>\n"

                + "      <p>If you'd like to connect, add your email or social links here.</p>\n                + \"      <button id=\\\"greetBtn\\\">Say hello</button>\\n\"\n"

                + "    </section>\n"

                + "  </main>\n"

                + "\n"

                + "  <script src=\"" + jsFile + "\"></script>\n"

                + "</body>\n"

                + "</html>\n";

        try (FileWriter fw = new FileWriter(new File(htmlFile))) {

            fw.write(html);

        }

    }

    private static void writeCSS(String cssFile) throws IOException {

        String css = "/* Basic responsive styles for the portfolio */\n"

                + "body { font-family: Arial, Helvetica, sans-serif; margin:0; padding:0; background: linear-gradient(120deg,#fff7f0,#f5f6ff); color:#222 }\n"

                + ".hero { background:#ffeff0; padding:40px 20px; text-align:center; border-bottom:1px solid #f0d6d9 }\n"

                + ".hero h1 { margin:0; font-size:2.25rem }\n"

                + ".subtitle { margin-top:8px; color:#333 }\n"

                + ".container { max-width:900px; margin:24px auto; padding:0 16px }\n"

                + ".card { background:#fff; padding:18px; margin-bottom:18px; border-radius:12px; box-shadow:0 6px 18px rgba(20,20,40,0.06) }\n"

                + ".placeholder { height:220px; display:flex; align-items:center; justify-content:center; border:2px dashed #e0cbd0; color:#8b8b8b; border-radius:8px }\n"

                + "button { padding:10px 14px; border-radius:8px; border:none; cursor:pointer }\n"

                + "@media (max-width:600px){ .hero h1{font-size:1.6rem} }\n";

        try (FileWriter fw = new FileWriter(new File(cssFile))) {

            fw.write(css);

        }

    }

    private static void writeJS(String jsFile, String name) throws IOException {

        String js = "// Simple interactivity for the generated portfolio\n"

                + "document.addEventListener('DOMContentLoaded', function(){\n"

                + "  var btn = document.getElementById('greetBtn');\n"

                + "  if(btn){\n"

                + "    btn.addEventListener('click', function(){\n"

                + "      alert('Hello! This portfolio belongs to " + escapeJS(name) + ".');\n"

                + "    });\n                + \"  }\\n\""

                + "  }\n"

                + "});\n";

        try (FileWriter fw = new FileWriter(new File(jsFile))) {

            fw.write(js);

        }

    }

    // small helpers to avoid naive injection inside generated files

    private static String escape(String s) {

        return s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;");

    }
\\\").replace("'", "\\'").replace("\"", "\\\"");

    }

}
    private static String escapeJS(String s) {

        return s.replace("\\", "\\\\").replace("'", "\\'").replace("\"", "\\\"");

    }

}