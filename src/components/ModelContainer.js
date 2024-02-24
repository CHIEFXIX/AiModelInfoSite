import React, { useEffect, useState } from 'react'
import "./ModelContainer.css"
import CardComponent from './CardComponent';
export default function ModelContainer() {
  const [models, setModels] = useState([]);
  useEffect(() => {
    aimodeldata();
  }, []);
  const aimodeldata = async () => {
    try {
      const response = await fetch(`https://my-json-server.typicode.com/chiefxix/aimodeldata/models`);
      const data = await response.json();
      if (response.ok) {
        setModels(data);
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert('Error fetching model data');
    }
  };
  return (
    <>
    <div className="ModelContainer" id='aimodels'>
      <h1>Most Loved AI Models by Devs ❤️</h1>
      <div className="cardcontainer">
        {models.map(model => (
          <CardComponent key={model.id} bgimage={model.bgimage} title={model.title} desc={model.desc} />
          ))}
      </div>
    </div>
    </>
  )
}
