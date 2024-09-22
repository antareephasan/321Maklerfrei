import React from "react";
import { Card, CardBody, Button } from "@windmill/react-ui";
import { EditIcon } from "../../icons";

function BillingDetailsCard({ listData, callback }) {
  return (
    <Card className="mb-8">
      <CardBody className="flex items-center justify-between">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          XXXX-XXXX-XXXX-{listData.stripePaymentMethod.last4}
        </p>
        <div>
          <Button
            icon={EditIcon}
            layout="link"
            aria-label="Edit"
            onClick={(e) => {
              e.preventDefault();
              callback();
            }}
          />
        </div>
      </CardBody>
    </Card>
  );
}

export default BillingDetailsCard;
