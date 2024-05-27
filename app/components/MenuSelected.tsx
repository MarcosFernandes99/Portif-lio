import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { MenuSectedProps } from "@/types/projects.interface";

export default function MenuSelect({ scrollToSection }: MenuSectedProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="flex justify-center bg-cinzaClaro p-2 fixed z-50 w-full sm:hidden">
      <div className="bg-verde rounded-full w-9 h-9 flex items-center justify-center">
        <span className="text-black font-bold text-xl">M</span>
      </div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className="text-white font-extrabold ml-2 hover:scale-110 duration-500 transition-transform text-xl"
      >
        Menu
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem
          onClick={() => {
            scrollToSection("inicio");
            handleClose();
          }}
        >
          Início
        </MenuItem>
        <MenuItem
          onClick={() => {
            scrollToSection("sobre");
            handleClose();
          }}
        >
          Sobre Mim
        </MenuItem>
        <MenuItem
          onClick={() => {
            scrollToSection("habilidades");
            handleClose();
          }}
        >
          Habilidades
        </MenuItem>
        <MenuItem
          onClick={() => {
            scrollToSection("projetos");
            handleClose();
          }}
        >
          Projetos
        </MenuItem>
        <MenuItem
          onClick={() => {
            scrollToSection("contato");
            handleClose();
          }}
        >
          Contato
        </MenuItem>
      </Menu>
    </div>
  );
}
