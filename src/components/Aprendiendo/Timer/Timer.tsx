import { useEffect, useState } from "react";

type Props = {
  misesimas: number;
};

const Timer = ({ misesimas }: Props) => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    setInterval(() => setSeconds((s) => s + 0.5), 1000);
  }, []);

  return (
    <div>
      <h4>
        Timer: <small>{seconds}</small>
      </h4>
    </div>
  );
};

export default Timer;
