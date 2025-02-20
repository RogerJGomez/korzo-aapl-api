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
  { date: "2024-02-01", price: 174.55 },
  { date: "2024-01-01", price: 172.78 },
  { date: "2023-12-01", price: 169.98 },
  { date: "2023-11-01", price: 167.99 },
  { date: "2023-10-01", price: 165.32 },
  { date: "2023-09-01", price: 163.45 },
  { date: "2023-08-01", price: 160.87 },
  { date: "2023-07-01", price: 158.62 },
  { date: "2023-06-01", price: 155.98 },
  { date: "2023-05-01", price: 152.32 },
  { date: "2023-04-01", price: 149.87 },
  { date: "2023-03-01", price: 145.12 },
];

app.get("/api/aapl-prices", (req: Request, res: Response) => {
  res.json(stockData);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
