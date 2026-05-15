"use client";

import {AlertDialog, Button} from "@heroui/react";

export function Deletemodal({data}) {
     const {
    _id,
    destinationName,
    
    description
  } = data;

   const deletedata = async (id) => {
      const res = await fetch(`http://localhost:5000/destination/${id}`, {
        method: "DELETE"
      });
      const output = await res.json();
      console.log(output);
    };

  return (
    <AlertDialog>
      <Button variant="danger">Delete Destination</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>{destinationName}</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                {description}
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={()=>deletedata(_id)} slot="close" variant="danger">
                Delete Permanently!
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}