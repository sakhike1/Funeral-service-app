export interface FuneralService {
  name: string;
}

export interface Town {
  name: string;
  funeralServices: string[];
}

export interface Province {
  name: string;
  towns: Town[];
}

const provincesData: Province[] = [
  {
    name: "Eastern Cape",
    towns: [
      {
        name: "Port Elizabeth (Gqeberha)",
        funeralServices: ["PE Memorials", "Gqeberha Funerals", "Eastern Farewells", "Bay Remembrance"]
      },
      {
        name: "East London",
        funeralServices: ["East Coast Memorials", "Buffalo City Funerals", "EL Remembrance", "Oceanview Farewells"]
      },
      {
        name: "Mthatha",
        funeralServices: ["Mthatha Memorials", "Transkei Funerals", "OR Tambo Farewells", "Umtata Remembrance"]
      },
      {
        name: "Grahamstown (Makhanda)",
        funeralServices: ["Grahamstown Memorials", "Makana Funerals", "Settlers Farewells", "Rhodes Remembrance"]
      }
    ]
  },
  {
    name: "Free State",
    towns: [
      {
        name: "Bloemfontein",
        funeralServices: ["Bloem Memorials", "Mangaung Funerals", "Rose Farewells", "Free State Remembrance"]
      },
      {
        name: "Welkom",
        funeralServices: ["Welkom Memorials", "Goldfields Funerals", "Welkom Farewells", "Matjhabeng Remembrance"]
      },
      {
        name: "Bethlehem",
        funeralServices: ["Bethlehem Memorials", "Dihlabeng Funerals", "Bethlehem Farewells", "Golden Gate Remembrance"]
      },
      {
        name: "Kroonstad",
        funeralServices: ["Kroonstad Memorials", "Moqhaka Funerals", "Kroonstad Farewells", "Vaal Remembrance"]
      }
    ]
  },
  {
    name: "Gauteng",
    towns: [
      {
        name: "Johannesburg",
        funeralServices: ["Joburg Memorials", "Egoli Funerals", "Jozi Farewells", "Sandton Remembrance"]
      },
      {
        name: "Pretoria (Tshwane)",
        funeralServices: ["Pretoria Memorials", "Tshwane Funerals", "Jacaranda Farewells", "Union Remembrance"]
      },
      {
        name: "Soweto",
        funeralServices: ["Soweto Memorials", "Orlando Funerals", "Vilakazi Farewells", "Soweto Remembrance"]
      },
      {
        name: "Midrand",
        funeralServices: ["Midrand Memorials", "Halfway Funerals", "Midrand Farewells", "Halfway House Remembrance"]
      }
    ]
  },
  {
    name: "KwaZulu-Natal",
    towns: [
      {
        name: "Durban",
        funeralServices: ["Durban Memorials", "eThekwini Funerals", "Golden Mile Farewells", "Durban Remembrance"]
      },
      {
        name: "Pietermaritzburg",
        funeralServices: ["PMB Memorials", "Msunduzi Funerals", "Pietermaritzburg Farewells", "KZN Remembrance"]
      },
      {
        name: "Richards Bay",
        funeralServices: ["Richards Bay Memorials", "uMhlathuze Funerals", "Bay Farewells", "Zululand Remembrance"]
      },
      {
        name: "Newcastle",
        funeralServices: ["Newcastle Memorials", "Amajuba Funerals", "Newcastle Farewells", "Northern KZN Remembrance"]
      }
    ]
  },
  {
    name: "Limpopo",
    towns: [
      {
        name: "Polokwane",
        funeralServices: ["Polokwane Memorials", "Capricorn Funerals", "Polokwane Farewells", "Limpopo Remembrance"]
      },
      {
        name: "Tzaneen",
        funeralServices: ["Tzaneen Memorials", "Letaba Funerals", "Tzaneen Farewells", "Magoebaskloof Remembrance"]
      },
      {
        name: "Thohoyandou",
        funeralServices: ["Thohoyandou Memorials", "Vhembe Funerals", "Thohoyandou Farewells", "Venda Remembrance"]
      },
      {
        name: "Lephalale",
        funeralServices: ["Lephalale Memorials", "Lephalale Funerals", "Ellisras Farewells", "Marapong Remembrance"]
      }
    ]
  },
  {
    name: "Mpumalanga",
    towns: [
      {
        name: "Nelspruit (Mbombela)",
        funeralServices: ["Nelspruit Memorials", "Mbombela Funerals", "Lowveld Farewells", "Mpumalanga Remembrance"]
      },
      {
        name: "Witbank (Emalahleni)",
        funeralServices: ["Witbank Memorials", "Emalahleni Funerals", "Coal Farewells", "Highveld Remembrance"]
      },
      {
        name: "Middelburg",
        funeralServices: ["Middelburg Memorials", "Middelburg Funerals", "Steel Farewells", "Middelburg Remembrance"]
      },
      {
        name: "Secunda",
        funeralServices: ["Secunda Memorials", "Secunda Funerals", "Secunda Farewells", "Highveld Remembrance"]
      }
    ]
  },
  {
    name: "Northern Cape",
    towns: [
      {
        name: "Kimberley",
        funeralServices: ["Kimberley Memorials", "Diamond Funerals", "Kimberley Farewells", "Northern Cape Remembrance"]
      },
      {
        name: "Upington",
        funeralServices: ["Upington Memorials", "Kalahari Funerals", "Upington Farewells", "Orange River Remembrance"]
      },
      {
        name: "Springbok",
        funeralServices: ["Springbok Memorials", "Namaqualand Funerals", "Springbok Farewells", "Namaqua Remembrance"]
      },
      {
        name: "De Aar",
        funeralServices: ["De Aar Memorials", "De Aar Funerals", "De Aar Farewells", "Karoo Remembrance"]
      }
    ]
  },
  {
    name: "North West",
    towns: [
      {
        name: "Mahikeng",
        funeralServices: ["Mahikeng Memorials", "Mahikeng Funerals", "Mahikeng Farewells", "North West Remembrance"]
      },
      {
        name: "Rustenburg",
        funeralServices: ["Rustenburg Memorials", "Rustenburg Funerals", "Platinum Farewells", "Bojanala Remembrance"]
      },
      {
        name: "Potchefstroom",
        funeralServices: ["Potch Memorials", "Potchefstroom Funerals", "Potch Farewells", "Tlokwe Remembrance"]
      },
      {
        name: "Klerksdorp",
        funeralServices: ["Klerksdorp Memorials", "Klerksdorp Funerals", "Klerksdorp Farewells", "Matlosana Remembrance"]
      }
    ]
  },
  {
    name: "Western Cape",
    towns: [
      {
        name: "Cape Town",
        funeralServices: ["Cape Town Memorials", "Table View Funerals", "Cape Farewells", "Table Mountain Remembrance"]
      },
      {
        name: "Stellenbosch",
        funeralServices: ["Stellenbosch Memorials", "Winelands Funerals", "Stellenbosch Farewells", "Winelands Remembrance"]
      },
      {
        name: "Paarl",
        funeralServices: ["Paarl Memorials", "Paarl Funerals", "Paarl Farewells", "Pearl Remembrance"]
      },
      {
        name: "Worcester",
        funeralServices: ["Worcester Memorials", "Worcester Funerals", "Worcester Farewells", "Breede Valley Remembrance"]
      }
    ]
  }
];

export default provincesData;