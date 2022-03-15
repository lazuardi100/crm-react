import { useMutation, gql } from "@apollo/client";
import { useNavigate } from "react-router-dom";

const MUTATION = gql`
  mutation AddCustomer($name: String!, $noHp: String!) {
    addCustomer(input: { name: $name, noHp: $noHp }) {
      namaCustomer
    }
  }
`;

function Tambah() {
  // eslint-disable-next-line no-unused-vars
  const [mutation, {data, loading, error}] = useMutation(MUTATION);
  const navigate = useNavigate();

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  const Daftarkan = () => {
    const nama = document.querySelector("#nama").value;
    const hp = document.querySelector("#no_hp").value;

    mutation({
      variables: {
        name: nama,
        noHp: hp,
      },
    });

    // console.log(data)
    navigate("/customers");
  };
  return (
    <div className="container mt-3">
      <div className="mb-3">
        <label for="" className="form-label">
          Nama Calon Customer
        </label>
        <input
          type="text"
          className="form-control"
          name="nama"
          id="nama"
          aria-describedby="helpId"
          placeholder=""
        />
        <div className="mb-3">
          <label for="" className="form-label">
            Nomor HP
          </label>
          <input
            type="text"
            className="form-control"
            name="no_hp"
            id="no_hp"
            aria-describedby="helpId"
            placeholder=""
          />
        </div>
      </div>
      <button onClick={Daftarkan} className="btn btn-primary">
        Simpan
      </button>
    </div>
  );
}

export default Tambah;
