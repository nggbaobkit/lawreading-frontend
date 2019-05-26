import React from 'react'
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'
import faker from 'faker';
// import SoundPLayer from '../SoundPlayer/SoundPlayer';

const handleButtonClicked = (e) => {
  console.log("Tao audio button clicked!")
  console.log(e)
}

const LawContentModal = (name, content, date) => (
  <Modal trigger={<Button primary color="pink" floated='right' >Xem thêm <Icon className='right chevron' /> </Button>}>
    <Modal.Header>idk</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='huge' src={faker.image.abstract()} />
      <Modal.Description>
        <Header>idk</Header>
        {}
        
        <p>dik</p>
        <p>{faker.lorem.paragraphs()}</p>
        <p>{faker.lorem.paragraphs()}</p>
        <p>{faker.lorem.paragraphs()}</p>
        <p>{faker.lorem.paragraphs()}</p>
        <p>{faker.lorem.paragraphs()}</p>
      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
      <Button primary onClick={{handleButtonClicked}}>
        Download audio <Icon name='right chevron' />
      </Button>
    </Modal.Actions>
  </Modal>
)

export default LawContentModal
