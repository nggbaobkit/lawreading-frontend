import React, { Component } from 'react';
import {RadioGroup, Radio} from 'react-radio-group';
import { Input, Header } from 'semantic-ui-react';
import { Segment, Button, Grid, TextArea , Form, Divider} from 'semantic-ui-react';

class SearchLawForm extends Component {
    state = { term: '', category:'name' };

    onSubmitButtonClick = (event) => {
        console.log("Search form submitted!");
    }
    
    onFormSubmit = (event) => { 
        event.preventDefault();
        this.props.onSubmit(this.state.term, this.state.category);
    }
    
    handleInputTextChange = (e) => {
        this.setState({term: e.target.value})
    }

    handleCategoryChange = (e) => {
        this.setState({category: e})
    }
    
    render() { 
        return ( 
<>
<Segment style={{backgroundColor:'' ,minHeight: 300, padding: '1em 0em' }} vertical>
<Grid className="my-grid">
    <Grid.Row columns={2} >
        <Grid.Column style={{backgroundColor:'', margin: 'auto 0'}}>
            <div style={{ backgroundColor:'', margin: '5em'}}>
            <Header style={{fontSize:'4em'}} inverted icon textAlign='left'>Tra cứu luật</Header>
            <p style={{color:'white', fontSize:'1.2em', marginBottom:'3em'}}>Tìm kiếm một bộ luật, điều luật, sự kiện bất kỳ trong cơ sở dữ liệu hàng ngàn records.</p>
            <Button inverted basic size='huge' color='grey' type="Submit" onClick={(e) => console.log(e)}>Liên hệ</Button>
            </div>
            
        </Grid.Column>
        
        <Grid.Column>
        <Form className="my-form" onSubmit={this.onFormSubmit}>
            <Form.Field>
                <Header as="h1"  inverted>Nhập từ khoá</Header>
                <Input fluid icon='search' 
                    size="big"
                    placeholder='Search...' 
                    value={this.state.term} 
                    onChange={this.handleInputTextChange}
                />
                <Divider horizontal></Divider>
            </Form.Field>
            <Form.Field>
                <RadioGroup name="category" selectedValue={this.state.category} onChange={this.handleCategoryChange} style={{marginTop: "20px"}}>
                    <Grid columns='three' divided>
                        <Grid.Row>
                        <Grid.Column>
                            <label className="radio-label" ><Radio value="name" /> Tiêu đề</label>
                        </Grid.Column>
                        <Grid.Column>
                            <label className="radio-label" ><Radio value="content" /> Nội dung</label>
                        </Grid.Column>
                        <Grid.Column>
                            <label className="radio-label" ><Radio value="signer" /> Tác giả</label>
                        </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </RadioGroup>
            </Form.Field>
            <div style={{display:'flex', flexDirection:'row', height:'80px', justifyContent:'center', alignItems:'center', backgroundColor:''}}>
                <Button style={{padding:'20px'}} inverted sbasic size='huge' color='teal' type="Submit" onClick={this.onSubmitButtonClick()} >
                    Tìm kiếm
                </Button> 
            </div>
        </Form>
      </Grid.Column>
    </Grid.Row> 
</Grid>
</Segment>
</>
        );
    }
}
 
export default SearchLawForm;