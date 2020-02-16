import { Layout } from "../../components/Layout/Layout";
import withAuthentication from "../../components/HOC/withAuthentication";

const Collaborator = ({}) => (
  <Layout title="Quản lý cộng tác viên">Hello CTV</Layout>
);

export default withAuthentication(Collaborator);
