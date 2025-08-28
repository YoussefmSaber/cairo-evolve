import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 3000;

// Fix __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetLinks = [
  {
    relation: ["delegate_permission/common.handle_all_urls"],
    target: {
      namespace: "android_app",
      package_name: "com.cairosquad.evolvefit",
      sha256_cert_fingerprints: [
        "7D:87:9C:39:29:93:66:75:60:C4:6E:CD:F8:CB:42:26:EC:C8:00:03:BA:A5:8D:1B:04:D7:A8:84:0B:45:5A:4E",
	"EF:BA:CD:AA:CE:DE:53:B8:E3:9A:BF:F8:A3:A1:34:C1:12:3E:0A:5A:F8:5B:B3:52:10:B1:B6:FF:10:30:B7:82"
      ]
    }
  }
];


app.use(express.static(path.join(__dirname, "client/dist")));

app.get("/.well-known/assetlinks.json", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.json(assetLinks);
});

app.get('/', (req, res) => {
    res.send('Hello World');
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});