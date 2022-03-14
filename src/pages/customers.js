import { useQuery, gql } from "@apollo/client";

function Customers() {
  const CUSTOMERS_QUERY = gql`
    {
      customers {
        idCustomer
        namaCustomer
        noHp
      }
    }
  `;
  const { loading, error, data } = useQuery(CUSTOMERS_QUERY);
  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;
  console.log(data.customers);
  return (
    <>
      <div className="container mt-3">
        <h1>List Customers</h1>
        <a href="/tambah" className="btn btn-success">Tambah Customers</a>
        <table class="table">
          <thead>
            <tr>
              <th>Customers</th>
              <th>No Telepon</th>
              <th>Ubah</th>
            </tr>
          </thead>
          <tbody>
            {data.customers.map((res) => (
              <tr>
                <td scope="row">{res.namaCustomer}</td>
                <td>{res.noHp}</td>
                <td>
                    <a href={`/ubah/${res.idCustomer}`} className="btn btn-primary">Ubah</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Customers;
