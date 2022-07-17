import { useEffect, useRef, useState } from "react";
import * as Styles from "./Header.styles";
import locationPin from "../../assets/icons/locationPin.svg";
import Typography from "../../components/Typography";
import { provinces } from "../../utils/provinces";

interface IHeader {
  onSelectProvince: (province: string) => void;
  selectedProvince: string;
}

function Header({ onSelectProvince, selectedProvince }: IHeader) {
  const [showMenu, setShowMenu] = useState(false);
  const navMenu = useRef<HTMLUListElement>(null);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    document.addEventListener("mousedown", (e: any) => {
      if (navMenu.current && !navMenu.current.contains(e.target)) {
        setShowMenu(false);
      }
    });
    return () => {
      document.removeEventListener("mousedown", () => {
        setShowMenu(!showMenu);
      });
    };
  }, [showMenu]);

  return (
    <Styles.Root>
      <Styles.HeaderContainer>
        <Typography fontSize={24} lineHeight={28.8} marginBottom={10}>
          Browse our providers
        </Typography>
        <Typography fontSize={14.8} color={"#6F737A"} marginBottom={20}>
          Mental Wellness
        </Typography>

        <Styles.LocationContainer onClick={handleShowMenu}>
          <img
            style={{ height: "12.35px", marginRight: "7.07px" }}
            src={locationPin}
            alt="location pin"
          />
          <Typography fontSize={14} fontWeight={500}>
            {selectedProvince}
          </Typography>
        </Styles.LocationContainer>
        {showMenu && (
          <Styles.NavMenu ref={navMenu}>
            {provinces.map((province) => (
              <Styles.NavMenuItem
                key={province.abbreviation}
                onClick={() => {
                  handleShowMenu();
                  onSelectProvince(province.abbreviation);
                }}
              >
                {province.name}
              </Styles.NavMenuItem>
            ))}
          </Styles.NavMenu>
        )}
      </Styles.HeaderContainer>
    </Styles.Root>
  );
}

export default Header;
