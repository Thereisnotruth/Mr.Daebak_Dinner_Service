import React, { useState } from 'react';
import { Modal, Button, Grid, Paper, Select, FormControl, InputLabel, MenuItem } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { LoginButton, SelectNum } from '../components';

const OrderModal = (props) => {
  const { type, destructor, m, s } = props;
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState('');
  const [style, setStyle] = useState('');

  const [valentine, setValentine] = useState({
    heartPlate: 1,
    napkin: 1,
  });
  const [french, setFrench] = useState({
    coffee: 1,
    wine: 1,
    salad: 1,
    meat: 1,
  });
  const [english, setEnglish] = useState({
    scramble: 1,
    bacon: 1,
    bread: 1,
    steak: 1,
  });
  const [champagne, setChampagne] = useState({
    champagne: 1,
    coffeePort: 1,
    baguette: 4,
  })
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);

  };

  const handleMenuChange = (e) => {
    setMenu(e.target.value);
  }
  const handleStyleChange = (e) => {
    setStyle(e.target.value);
  }

  const valentineHeartPlateChange = (e) => {
    setValentine({
      heartPlate: e.target.value,
      napkin: valentine.napkin,
    })
  }
  const valentineNapkinChange = (e) => {
    setValentine({
      heartPlate: valentine.heartPlate,
      napkin: e.target.value,
    })
  }

  const frenchCoffeeChange = (e) => {
    setFrench({
      coffee: e.target.value,
      wine: french.wine,
      salad: french.salad,
      meat: french.meat,
    })
  }
  const frenchWineChange = (e) => {
    setFrench({
      coffee: french.coffee,
      wine: e.target.value,
      salad: french.salad,
      meat: french.meat,
    })
  }
  const frenchSaladChange = (e) => {
    setFrench({
      coffee: french.coffee,
      wine: french.wine,
      salad: e.target.value,
      meat: french.meat,
    })
  }
  const frenchMeatChange = (e) => {
    setFrench({
      coffee: french.coffee,
      wine: french.wine,
      salad: french.salad,
      meat: e.target.value,
    })
  }
  const englishScrambleChange = (e) => {
    setEnglish({
      scramble: e.target.value,
      bacon: english.bacon,
      bread: english.bread,
      steak: english.steak,
    })
  }
  const englishBaconChange = (e) => {
    setEnglish({
      scramble: english.scramble,
      bacon: e.target.value,
      bread: english.bread,
      steak: english.steak,
    })
  }
  const englishBreadChange = (e) => {
    setEnglish({
      scramble: english.scramble,
      bacon: english.bacon,
      bread: e.target.value,
      steak: english.steak,
    })
  }
  const englishSteakChange = (e) => {
    setEnglish({
      scramble: english.scramble,
      bacon: english.bacon,
      bread: english.bread,
      steak: e.target.value,
    })
  }
  const champagneChampagneChange = (e) => {
    setChampagne({
      champagne: e.target.value,
      coffeePort: champagne.coffeePort,
      baguette: champagne.baguette,
    })
  }
  const champagneCoffeePortChange = (e) => {
    setFrench({
      champagne: champagne.champagne,
      coffeePort: e.target.value,
      baguette: champagne.baguette,
    })
  }
  const champagneBaguetteChange = (e) => {
    setFrench({
      champagne: champagne.champagne,
      coffeePort: champagne.coffeePort,
      baguette: e.target.value,
    })
  }

  const menuSubmit = () => {
    if(menu === '' || style === '') {
      alert('선택하지 않은 항목이 있습니다.');
      return;
    }
    let dinner;
    if (menu === 'Valentine') {
      dinner = 'heart plate: ' + valentine.heartPlate + ' napkin: ' + valentine.napkin;
    };
    if (menu === 'French') {
      dinner = 'coffee: ' + french.coffee + ' wine: ' + french.wine + ' salad: ' + french.salad + ' meat: ' + french.meat;
    };
    if (menu === 'English') {
      dinner = 'scramble egg: ' + english.scramble + ' bacon: ' + english.bacon + ' bread: ' + english.bread + ' steak: ' + english.steak;
    };
    if (menu === 'Champagne Feast') {
      dinner = 'champagne: ' + champagne.champagne + ' coffee port: ' + champagne.coffeePort + ' baguette: ' + champagne.baguette;
    };
    destructor(menu, style, dinner)
    handleClose();
  }

  return (
    <Grid>
      <Button className={type} onClick={handleOpen}>
        {
          (type==='menu_add_button')?
          <AddCircleIcon fontSize='large' />
        :<Button>{m} {s}</Button>
        }
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Paper className='modal_con'>
        <Grid container>
          <Grid item xs={12}><br/></Grid>
          <Grid item xs={6} className='modal_left'>
            메뉴
          </Grid>
          <Grid item xs={6}>
            <FormControl  className='modal_right'>
              <InputLabel>메뉴</InputLabel>
              <Select onChange={handleMenuChange}>
                <MenuItem value={'Valentine'}>Valentine</MenuItem>
                <MenuItem value={'French'}>French</MenuItem>
                <MenuItem value={'English'}>English</MenuItem>
                <MenuItem value={'Champagne Feast'}>Champagne Feast</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}><br/></Grid>
          <Grid item xs={6} className='modal_left'>
            스타일
          </Grid>
          <Grid item xs={6}>
            <FormControl className='modal_right'>
              <InputLabel>스타일</InputLabel>
              <Select onChange={handleStyleChange}>
                {(menu !== 3)?
                  <MenuItem value={'Simple'}>Simple</MenuItem>
                  : <div></div>
                }
                <MenuItem value={'Grand'}>Grand</MenuItem>
                <MenuItem value={'Deluxe'}>Deluxe</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}><br/></Grid>
          <Grid item xs={6} className='modal_left'>
            상세
          </Grid>
          <Grid item xs={6}>
            {
              (menu === 'Valentine')?
              <Grid item xs={6}>
                <Grid container>
                  <Grid item xs={10} className='tag'>
                    하트모양 큐피드 
                    장식 접시
                  </Grid>
                  <SelectNum initialValue={valentine.heartPlate} change={valentineHeartPlateChange}/>
                  <Grid item xs={10} className='tag'>
                    냅킨
                  </Grid>
                  <SelectNum initialValue={valentine.napkin} change={valentineNapkinChange}/>
                </Grid>
              </Grid>
              : (menu === 'French')?
              <Grid item xs={6}>
                <Grid container>
                  <Grid item xs={10} className='tag'>
                    커피 한잔
                  </Grid>
                  <SelectNum initialValue={french.coffee} change={frenchCoffeeChange}/>
                  <Grid item xs={10} className='tag'>
                    와인 한잔
                  </Grid>
                  <SelectNum initialValue={french.wine} change={frenchWineChange}/>
                  <Grid item xs={10} className='tag'>
                    샐러드
                  </Grid>
                  <SelectNum initialValue={french.salad} change={frenchSaladChange}/>
                  <Grid item xs={10} className='tag'>
                    고기
                  </Grid>
                  <SelectNum initialValue={french.meat} change={frenchMeatChange}/>
                </Grid>
              </Grid>
              : (menu === 'English')?
              <Grid item xs={6}>
                <Grid container>
                  <Grid item xs={10} className='tag'>
                    스크램블 에그
                  </Grid>
                  <SelectNum initialValue={english.scramble} change={englishScrambleChange}/>
                  <Grid item xs={10} className='tag'>
                    베이컨
                  </Grid>
                  <SelectNum initialValue={english.bacon} change={englishBaconChange}/>
                  <Grid item xs={10} className='tag'>
                    빵
                  </Grid>
                  <SelectNum initialValue={english.bread} change={englishBreadChange}/>
                  <Grid item xs={10} className='tag'>
                    스테이크
                  </Grid>
                  <SelectNum initialValue={english.steak} change={englishSteakChange}/>
                </Grid>
              </Grid>:
              (menu === 'Champagne Feast')?
              <Grid item xs={6}>
                <Grid container>
                  <Grid item xs={10} className='tag'>
                    샴페인
                  </Grid>
                  <SelectNum initialValue={champagne.champagne} change={champagneChampagneChange}/>
                  <Grid item xs={10} className='tag'>
                    바게트 빵
                  </Grid>
                  <SelectNum initialValue={champagne.baguette} change={champagneBaguetteChange}/>
                  <Grid item xs={10} className='tag'>
                    커피포트
                  </Grid>
                  <SelectNum initialValue={champagne.coffeePort} change={champagneCoffeePortChange}/>
                </Grid>
              </Grid>:<Grid></Grid>
            }
          </Grid>
          <Grid item xs={12}><br/></Grid>
            
          <LoginButton variant='contained' color='primary' className='order_modal_submit' onClick={menuSubmit}>
            확인
          </LoginButton>
        </Grid>
        </Paper>
      </Modal>
    </Grid>
  );
}

export default OrderModal;