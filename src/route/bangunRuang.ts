import express from "express";
import {
  luaspermukaanBalok,
  luaspermukaanBola,
  luaspermukaanKubus,
  luaspermukaanTabung,
  volumeBalok,
  volumeBola,
  volumeKubus,
  volumeTabung,
} from "../controller/bangunRuang";
import { validatePersegi } from "../middleware/validatePersegi";
import { validateLingkaran } from "../middleware/validateLingkaran";
import { validateTabung } from "../middleware/validateTabung";
import { validateBalok } from "../middleware/validateBalok";
const app = express();

app.use(express.json());

app.post(`/tabung/volume`,validateTabung, volumeTabung);
app.post(`/tabung/luaspermukaan`,validateTabung, luaspermukaanTabung);
app.post(`/kubus/volume`,validatePersegi, volumeKubus);
app.post(`/kubus/luaspermukaan`,validatePersegi, luaspermukaanKubus);
app.post(`/balok/volume`,validateBalok, volumeBalok);
app.post(`/balok/luaspermukaan`,validateTabung, luaspermukaanBalok);
app.post(`/bola/volume`,validateLingkaran,volumeBola);
app.post(`/bola/luaspermukaan`,validateLingkaran, luaspermukaanBola);

export default app;
