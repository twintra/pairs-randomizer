// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import pool from "/public/data/pool.json"

export default function handler(req, res) {
    res.status(200).json(pool)
  }
  