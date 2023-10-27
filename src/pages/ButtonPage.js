import Button from "../components/Button";
import { GoBell, GoCloud, GoDatabase } from "react-icons/go";
function ButtonPage() {
  return (
    <div>
      <div>
        <Button primary>
          <GoBell />
          click me
        </Button>
      </div>
      <div>
        <Button secondary>
          <GoCloud />
          buy now
        </Button>
      </div>
      <div>
        <Button warning>
          <GoDatabase />
          hi
        </Button>
      </div>
      <div>
        <Button outline rounded danger>
          go
        </Button>
      </div>
      <div>
        <Button success>link</Button>
      </div>
    </div>
  );
}

export default ButtonPage;
