import React, {useState, useEffect} from 'react'
import Matrica from './Matrica';
import Dimenzija from './Dimenzija';

export default function Mnozenje() {
    const [brojRedova, setBrojRedova] = useState(1);
    const [brojRK, setBrojRK] = useState(1);
    const [brojKolona, setBrojKolona] = useState(1);
    const [prvaMatrica, setPrvaMatrica] = useState([[0]]);
    const [drugaMatrica, setDrugaMatrica] = useState([[0]]);
    const [res, setRes] = useState(undefined);
    const updateMatrica = setMatrica => (i,j) => value => {
      setMatrica(prev=>{
        let novaMatrica=[...prev];
        let noviRed=[...prev[i]];
        noviRed[j]=value;
        novaMatrica[i]=noviRed;
        return novaMatrica;
      })
    }
    useEffect(()=>{
      setPrvaMatrica(new Array(brojRedova).fill(new Array(brojRK).fill(0)));
      setDrugaMatrica(new Array(brojRK).fill(new Array(brojKolona).fill(0)));
    }, [brojRK,brojRedova,brojKolona])
    const izracunajMatricu=()=>{
      const novaMatrica=new Array(brojRedova);
      for (let i=0;i<brojRedova;i++) {
        novaMatrica[i]=new Array(brojKolona).fill(0);
        for (let j=0;j<brojKolona;j++) {
          for (let k=0;k<brojRK;k++) {
            novaMatrica[i][j]=novaMatrica[i][j]+prvaMatrica[i][k]*drugaMatrica[k][j];
          }
        }
      }
      setRes(novaMatrica);
    }

    return (
      <div>
        <h1 className='text-center'>Mnozenje matrica</h1>
        <div className='mt-2 d-flex justify-content-center'>
          <Dimenzija value={brojRedova} onChange={setBrojRedova} label='M'/>
          <Dimenzija value={brojRK} onChange={setBrojRK} label='N'/>
          <Dimenzija value={brojKolona} onChange={setBrojKolona} label='P'/>
        </div>
        <div className='row mt-5'>
        <div className='col-3  d-flex align-items-center justify-content-center display-4'>
          <Matrica sufiks='M x N' podaci={prvaMatrica} onChange={updateMatrica(setPrvaMatrica)}/>
        </div>
        <div className='col-1 d-flex align-items-center justify-content-center display-4'>*</div>
        <div className='col-3  d-flex align-items-center justify-content-center display-4'>
          <Matrica sufiks='N x P' podaci={drugaMatrica} onChange={updateMatrica(setDrugaMatrica)}/>
        </div>
        <div className='col-1 d-flex align-items-center justify-content-center display-4'>
          <button onClick={izracunajMatricu} className='btn'>=</button>
        </div>
        {
          res && (
            <div className='col-3 d-flex align-items-center justify-content-center display-4'>
              <Matrica sufiks='M x P' readOnly podaci={res}/>
            </div>
          )
        }
        </div>
      </div>
    )
}