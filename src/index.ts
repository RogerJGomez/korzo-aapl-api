import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

interface StockData {
  date: string;
  price: number;
}

const stockData: StockData[] = [
  { date: "01-01-2024", price: 174.55 },
  { date: "02-01-2024", price: 172.78 },
  { date: "03-01-2024", price: 165.98 },
  { date: "04-01-2024", price: 157.99 },
  { date: "05-01-2024", price: 105.32 },
  { date: "06-01-2024", price: 143.45 },
  { date: "07-01-2024", price: 160.87 },
  { date: "08-01-2024", price: 128.62 },
  { date: "09-01-2024", price: 115.98 },
  { date: "10-01-2024", price: 152.32 },
  { date: "11-01-2024", price: 129.87 },
  { date: "12-01-2024", price: 145.12 },
];

app.get("/api/aapl-prices", (req: Request, res: Response) => {
  res.json(stockData);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
