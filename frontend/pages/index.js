import { Button, Alert } from "reactstrap";
import Layout from "../components/Layout";

export default () => {
  return (
    <Layout>
      <div>
        <Alert color="primary">
          Schnell foods?
        </Alert>
        &nbsp; <Button color="primary">Hello from nextjs</Button>
      </div>
    </Layout>
  );
};