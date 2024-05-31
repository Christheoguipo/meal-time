import { UserCog } from "lucide-react";

function NavBar() {
  return (
    <>
      <button>Recipes</button>

      <button aria-label="settings-icon">
        <UserCog />
      </button>
    </>
  );
}

export default NavBar;
