import "./App.css";
import CarDetails from "./components/CarDetails";

function App() {
  const cars = [
    {
      name: "FERRARI 458 ITALIA",
      brand: "Ferrari",
      description:
        "Ferrari é uma fabricante italiana de carros esportivos de luxo com sede em Maranello. Fundada por Enzo Ferrari em 1939 na divisão de corridas da Alfa Romeo com o nome Auto Avio Costruzioni, a empresa construiu seu primeiro carro em 1940.",
      img: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2022/202210/20221022/ferrari-458-italia-4.5-v8-gasolina-f1dct-wmimagem09125908294.jpg?s=fill&w=1920&h=1440&q=75",
    },
    {
      name: "BMW - 320i M Sport - 2023",
      brand: "BMW",
      description:
        "Série 3 é uma série de automóveis compactos produzidos pela BMW desde 1975, sendo o sucessor da BMW Série 02. A Série 3 é o modelo mais vendido da BMW, representando cerca de 30% das vendas totais anuais da marca BMW (excluindo motos).",
      img: "https://bocamafrapremium.com.br/wp-content/uploads/2022/12/7f40398acd3542128b009dddc8dfbbdb_1645210156761.jpg",
    },
    {
      name: "Audi TT",
      brand: "Audi",
      description:
        "O Audi TT é um automóvel esportivo de duas portas produzido pela Audi desde 1998,[1] fabricado em Győr, Hungria, pela Audi Hungaria Motor Kft., usando a carroceria que é produzida e pintada na planta de Ingolstadt, Alemanha.",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Audi_TT_Coup%C3%A9_2.0_TFSI_quattro_S-line_%288S%29_%E2%80%93_Frontansicht%2C_3._April_2015%2C_D%C3%BCsseldorf.jpg/1920px-Audi_TT_Coup%C3%A9_2.0_TFSI_quattro_S-line_%288S%29_%E2%80%93_Frontansicht%2C_3._April_2015%2C_D%C3%BCsseldorf.jpg",
    },
  ];
  return (
    <div className="App">
      <h1>Exibição de carros</h1>
      <div className="carsDetails">
        {cars.map((car) => (
          <CarDetails
            key={car.name}
            name={car.name}
            brand={car.brand}
            description={car.description}
            img={car.img}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
