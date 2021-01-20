import React from 'react'
// react plugin for creating charts
// @material-ui/core
import { makeStyles } from '@material-ui/core/styles'
// @material-ui/icons

// core components
import GridItem from 'components/Grid/GridItem.js'
import GridContainer from 'components/Grid/GridContainer.js'
import Table from 'components/Table/Table.js'
import CustomTabs from 'components/CustomTabs/CustomTabs.js'
import Card from 'components/Card/Card.js'
import CardHeader from 'components/Card/CardHeader.js'
import CardBody from 'components/Card/CardBody.js'
import PageOne from 'components/Questions/PageOne'
import PageTwo from 'components/Questions/PageTwo'
import PageThree from 'components/Questions/PageThree'

import styles from 'assets/jss/material-dashboard-react/views/dashboardStyle.js'

const useStyles = makeStyles(styles)

export default function Dashboard() {
  const classes = useStyles()
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <CustomTabs
            title='Page:'
            headerColor='primary'
            tabs={[
              {
                tabName: 'Page 1',
                tabContent: <PageOne />,
              },
              {
                tabName: 'Page 2',

                tabContent: <PageTwo />,
              },
              {
                tabName: 'Page 3',

                tabContent: <PageThree />,
              },
            ]}
          />
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color='warning'>
              <h4 className={classes.cardTitleWhite}>Insured Vehicles</h4>
              <p className={classes.cardCategoryWhite}>John Smith</p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor='warning'
                tableHead={['ID', 'Make', 'Model', 'Miles/Hours']}
                tableData={[
                  ['1', 'Chevy', 'S10', '23,000'],
                  ['2', 'Nissan', 'Rouge', '77,500'],
                  ['3', 'John Deere', 'Combine', '5000 hr'],
                  ['4', 'Porsche', 'GT2 RS', '100'],
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  )
}
