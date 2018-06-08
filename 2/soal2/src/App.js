import React, { Component } from 'react';

import './App.css';

class App extends Component {
  state = {
    awal:'',
    poin:'',
    poin2:'',
    poin3:'',
    poin4:'',
    terpilihtingkat:'Pilih Tingkat',
    terpilihjenjang:'Pilih Jenjang'
    };
  
  klik1 =() =>{     
    this.setState({
      terpilihtingkat:'Pendidikan Pra Sekolah' ,
      awal:'Jenjang Pendidikan Pra Sekolah',
      poin:'PAUD (Pendidikan Anak Usia Dini)',
      poin2:'TK (Taman Kanak-kanak)',
      poin3:'RA (Raudhatul Athfal)',
      poin4:'',
    });   
  }

  klik2 =() =>{     
    this.setState({
      terpilihtingkat:'Pendidikan Dasar' ,
      awal:'Jenjang Pendidikan Dasar',
      poin: 'SD (Sekolah Dasar )',
      poin2:'MI (Madrasah Ibtidaiyah)',
      poin3:'SMP (Sekolah Menegah Pertama)',
      poin4:'MTs (Madrasah Tsanawiyah)',
    });   
  }

  klik3 =() =>{     
    this.setState({
      terpilihtingkat:'Pendidikan Menengah' ,
      awal:'Jenjang Pendidikan Menengah',
      poin:'SMA (Sekolah Menegah Atas)',
      poin2:'MA (Madrasah Aliyah)',
      poin3:'SMK (Sekolah Menengah Kejuruan)',
      poin4:'',
    });   
  }

  klik4 =() =>{     
    this.setState({
      terpilihtingkat:'Pendidikan Tinggi' ,
      awal:'Jenjang Pendidikan Tinggi',
      poin:'D3 Diploma',
      poin2:'S1/D4 Sarjana',
      poin3:'S3 Doktoral',
      poin4:'',
    });   
  }

  render() {

    return (
      <div>
<center>
  <h1 style={{fontSize:"30px",fontWeight:"bold",marginTop:"20px"}}>Jenjang Pendidikan</h1>
 <div className="container" style={{marginTop:"20px"}}>
  <div class="btn-group">
    <button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown"
     style={{width: "300px"}}>{this.state.terpilihtingkat}</button>
    <div class="dropdown-menu">
        <a className="dropdown-item" onClick= {this.klik1}>Pendidikan Pra Sekolah</a>
        <a className="dropdown-item" onClick= {this.klik2} >Pendidikan Dasar</a>
        <a className="dropdown-item" onClick= {this.klik3} >Pendidikan Menengah</a>
        <a className="dropdown-item" onClick= {this.klik4} >Pendidikan Tinggi</a>
    </div>
  </div>
  </div>
       </center>
       <br/><br/><br/><br/><br/><br/><br/><br/>
       <center>
       { this.state.poin === '' ? 
         <h3>{this.state.awal}</h3> :
         <div>
            <h5  style={{fontSize:"30px",fontWeight:"bold",marginTop:"20px"}}>{this.state.awal}</h5>
          
            <ul>
            <li><p>{this.state.poin}</p></li>
            <li><p>{this.state.poin2}</p></li>
            <li><p>{this.state.poin3}</p></li>
            <li><p>{this.state.poin4}</p></li>
            </ul>
           
          </div>
        }
    </center>
    </div>
    );
  }
}

export default App;
