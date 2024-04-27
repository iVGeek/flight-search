import axios from 'axios';

interface Flight {
  id: number;
  destination: string;
  departureDate: Date;
  price: number;
}

async function getFlights(date: Date): Promise<Array

