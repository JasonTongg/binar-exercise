import React, {useState} from 'react'
// import "../css/Latihan.css"

export default function Latihan() {
    let [data, setData] = useState(0);
    let kurang = () => {
        data > 0 ? setData(data-1) : alert("Data tidak bisa kurang dari 0");
    }
    return (
        <div className='container'>
            <div className="buttons">
                <button onClick={() => setData(data+1)}>tambah</button>
                <button onClick={kurang}>kurang</button>
            </div>
            <h1>{data}</h1>
        </div>
    )
}
