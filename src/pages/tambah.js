import { useMutation, gql } from "@apollo/client";

function Tambah() {
    const Daftarkan = () =>{
        const nama = document.querySelector('#nama')
        const hp = document.querySelector('#no_hp')

        
    }
    return ( <div className="container mt-3">
        <div class="mb-3">
          <label for="" className="form-label">Nama Calon Customer</label>
          <input type="text" class="form-control" name="nama" id="nama" aria-describedby="helpId" placeholder=""/>
          <div class="mb-3">
            <label for="" className="form-label">Nomor HP</label>
            <input type="text" class="form-control" name="no_hp" id="no_hp" aria-describedby="helpId" placeholder=""/>
          </div>
        </div>
        <button className="btn btn-primary">Simpan</button>
    </div> );
}

export default Tambah;