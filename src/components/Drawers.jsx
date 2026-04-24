import { CircleCheck } from "@gravity-ui/icons";
import {
  Button,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
  Select,
  ListBox,
} from "@heroui/react";

const Drawers = ({ addATask }) => {
  return (
    <div className="mx-auto mt-5 ">
      <Modal>
        <Button variant="secondary">Open Contact Form</Button>
        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-md">
              <Modal.CloseTrigger />
              <Modal.Body className="p-6">
                <Surface variant="default">
                  <form action={addATask} className="flex flex-col gap-4">
                    <TextField
                      isRequired
                      minLength={8}
                      className="w-full"
                      name="title"
                      type="text"
                    >
                      <Label isRequired className="text-black">
                        titles
                      </Label>
                      <Input placeholder="Enter your Title" />
                    </TextField>
                    <TextField
                      className="w-full"
                      name="description"
                      type="text"
                    >
                      <Label isRequired className="text-black">
                        description
                      </Label>
                      <Input placeholder="Enter your email" />
                    </TextField>
                    <TextField
                      isRequired
                      className="w-full"
                      name="phone"
                      type="tel"
                    >
                      <Label className="text-black">Phone</Label>
                      <Input placeholder="Enter your phone number" />
                    </TextField>
                    <Select
                      name="priority"
                      className="w-[256px]"
                      placeholder="Select one"
                    >
                      <Label className="text-black">priority</Label>
                      <Select.Trigger>
                        <Select.Value />
                        <Select.Indicator />
                      </Select.Trigger>
                      <Select.Popover>
                        <ListBox className="text-black">
                          <ListBox.Item id="high" textValue="high">
                            High
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="medium" textValue="medium">
                            Medium
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="low" textValue="low">
                            Low
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                        </ListBox>
                      </Select.Popover>
                    </Select>
                    <Select
                      name="status"
                      className="w-[256px]"
                      placeholder="Select one"
                    >
                      <Label className="text-black">Status</Label>
                      <Select.Trigger>
                        <Select.Value />
                        <Select.Indicator />
                      </Select.Trigger>
                      <Select.Popover>
                        <ListBox className="text-black">
                          <ListBox.Item id="pending" textValue="pending">
                            pending
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="process" textValue="process">
                            process
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                        </ListBox>
                      </Select.Popover>
                    </Select>
                    <Modal.Footer>
                      <Button slot="close" variant="secondary">
                        Cancel
                      </Button>
                      <Button slot="close" type="submit">
                        Submit Form
                      </Button>
                    </Modal.Footer>
                  </form>
                </Surface>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default Drawers;
