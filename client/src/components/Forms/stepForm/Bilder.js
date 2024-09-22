import React from "react";
import { Input, Label } from '@windmill/react-ui'
import { Button } from '@windmill/react-ui'

export const Bilder = ({ formData, setForm, navigation }) => {
  const { firstName, lastName, nickName } = formData;

  return (
    <div class="container mx-auto px-4">
      <h3 className="mb-3">Names</h3>
      <Label>
      <span>Better to use a label</span>
      <Input
        className="mb-4 mt-1"
        label="First Name"
        name="firstName"
        value={firstName}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullwidth='true'
      />
      </Label>
      <Label>
      <span>Better to use a label</span>
      <Input
        className="mb-4 mt-1"
        label="Last Name"
        name="lastName"
        value={lastName}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullwidth='true'
      />
      </Label>
      <Label>
      <span>Better to use a label</span>
      <Input
        className="mb-4 mt-1"
        label="Nick Name"
        name="nickName"
        value={nickName}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullwidth='true'
      />
      </Label>
      <Button
        variant="contained"
        fullwidth='true'
        color="primary"
        style={{ marginTop: "1rem" }}
        onClick={() => navigation.next()}
      >
        Next
      </Button>
    </div>
  );
};