import React from "react";
import './scss/Block.scss';

interface BlockProps {
  id: string;
  children: React.ReactNode;
}

function Block(props: BlockProps): JSX.Element {
  // React.useEffect(() => {
  //   const block = document.getElementById(props.id);
  //   if (block !== null) {
  //     block.addEventListener("visibilitychange", () => {
  //       if (block !== null) {
  //         if (block.style.visibility === "hidden") {
  //           block.style.visibility = "visible";
  //         } else {
  //           block.style.visibility = "hidden";
  //         }
  //       }
  //     });
  //   }
  // }, [props.id]);

  return (
    <div id={props.id} className="block">
      {props.children}
    </div>
  );
}

export default Block;
