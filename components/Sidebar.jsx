import { Button, Stack } from 'react-bootstrap';
import { Router } from 'next/navigation';

const SidebarItem = ({menu}) => {
  function onClick () {
    Router.push(menu.href);
  }

  return (
    <Button variant="outline-primary"
      size="lg"
      key={menu.label}
      onClick={onClick}>
      {menu.label.toUpperCase()}
    </Button>
  )
}
const Sidebar = () => {
  const menus = [
    { label: "Kunjungan", href: "/kunjungan" },
    { label: "Data Warga", href: "/warga" }
  ]

  return (
    <Stack direction="horizontal" gap={3}>
      <h3 className="text-center">POSYANDU</h3>
      <div className="ms-auto"></div>
      {
        menus.map(menu => <SidebarItem key={menu.label} menu={menu} />)
      }
    </Stack>
  );
}

export default Sidebar;
