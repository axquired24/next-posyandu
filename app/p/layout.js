"use client"
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from "@/components/Sidebar";

const PLayout = ({children}) => {
  return (
    <Container className="p-4">
      <Sidebar />
      <div className="content-bg mt-4">
        {children}
      </div>
    </Container>
  );
}

export default PLayout;
