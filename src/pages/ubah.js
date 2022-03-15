import { useParams, useNavigate } from "react-router-dom";
import { useQuery, useMutation, gql } from "@apollo/client";

const SEARCH_QUERY = gql`
  query CariCustomer($id: String!) {
    cariCustomer(id: $id) {
      idCustomer
      namaCustomer
      noHp
    }
  }
`;

const DELETE_MUTATION = gql`
  mutation DeleteCustomer($id: String!) {
    deleteCustomer(input: { id: $id }) {
      id
    }
  }
`;

const UPDATE_MUTATION = gql`
  mutation UpdateCustomer($id: String!, $name: String!, $noHp: String!) {
    updateCustomer(input: { id: $id, name: $name, noHp: $noHp }) {
      namaCustomer
    }
  }
`;

function Ubah() {
  const { id } = useParams();
  const navigate = useNavigate();
  //   const [customer, setCustomer] = useState({});
  const { loading, error, data } = useQuery(SEARCH_QUERY, {
    variables: {
      id: id,
    },
  });

  const [deleteMutation] = useMutation(DELETE_MUTATION);
  const [updateMutation] = useMutation(UPDATE_MUTATION);

  const simpanData = () => {
    const idCustomer = document.querySelector("#id_customer").value;
    const namaCustomer = document.querySelector("#nama").value;
    const no_hp = document.querySelector("#no_hp").value;

    updateMutation({
      variables: {
        id: idCustomer,
        name: namaCustomer,
        noHp: no_hp,
      },
    });
    navigate("/customers");
  };

  const hapusData = () => {
    const idCustomer = document.querySelector("#id_customer").value;

    console.log(typeof idCustomer);

    deleteMutation({
      variables: {
        id: idCustomer,
      },
    });
    navigate("/customers");
  };

  const formData = (datanya) => {
    return (
      <div>
        <label className="form-label">Nama Customer</label>
        <input
          type="text"
          defaultValue={datanya.namaCustomer}
          className="form-control"
          id="nama"
        />
        <label className="form-label">NomorHP</label>
        <input
          type="text"
          defaultValue={datanya.noHp}
          className="form-control"
          id="no_hp"
        />
        <input value={datanya.idCustomer} id="id_customer" type="hidden" />
        <div className="mt-3">
          <button onClick={simpanData} className="btn btn-success">
            Ubah
          </button>
          <button onClick={hapusData} className="btn btn-danger ms-3">
            Hapus
          </button>
        </div>
      </div>
    );
  };

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;

  return (
    <div className="container">
      {data.cariCustomer ? <>{formData(data.cariCustomer)}</> : <></>}
    </div>
  );
}

export default Ubah;
