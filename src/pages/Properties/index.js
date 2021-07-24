import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AppBar, Toolbar, Typography, Box, Grid } from '@material-ui/core';
import { Map, Marker } from 'pigeon-maps';
import { VictoryChart, VictoryLine, VictoryTheme } from 'victory';

import { signOut } from '../../store/User/user.actions';

import { Main } from './styles';

const Properties = () => {
  const history = useHistory();

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  !user && history.push('/');

  return (
    <Main>
      <AppBar position="static" className="header-bar">
        <Toolbar>
          <div className="header-container">
            <div>
              <Typography variant="h6" noWrap>
                Olá {user?.email}
              </Typography>
            </div>

            <button className="btn-logout" onClick={() => dispatch(signOut())}>
              <Typography variant="subtitle1" noWrap>
                Sair
              </Typography>
            </button>
          </div>
        </Toolbar>
      </AppBar>

      <Typography variant="h5" align="center">
        Listagem de propriedades
      </Typography>

      {user?.properties.length > 0 ? (
        user?.properties.map((property) => (
          <Box
            className="box-container"
            margin="auto"
            boxShadow={1}
            width="70%"
            my={3}
            p={3}
          >
            <Typography variant="subtitle1" color="primary">
              Nome: {property.name}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              Tipo de colheita: {property.cropType}
            </Typography>

            <Grid container>
              <Grid item xs={12} sm={6}>
                <div>
                  <Typography variant="body1" align="center">
                    Localização
                  </Typography>
                  <Map
                    height={400}
                    defaultCenter={property.coordinates}
                    defaultZoom={11}
                  >
                    <Marker width={50} anchor={property.coordinates} />
                  </Map>
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <div className="chart-container">
                  <Typography variant="body1" align="center">
                    Produtividade
                  </Typography>

                  <VictoryChart theme={VictoryTheme.material} width={400}>
                    <VictoryLine
                      data={property.productivity}
                      x={(datum) => `Mês ${datum.month}`}
                      y="value"
                      style={{
                        data: {
                          stroke: '#f6a532',
                          strokeWidth: 4,
                          strokeLinecap: 'round',
                        },
                      }}
                    />
                  </VictoryChart>
                </div>
              </Grid>
            </Grid>
          </Box>
        ))
      ) : (
        <Typography variant="subtitle2" align="center">
          Nenhum resultado foi encontrado
        </Typography>
      )}
    </Main>
  );
};

export default Properties;
