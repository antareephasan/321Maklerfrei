import React from 'react'
import { Card, CardBody, Button } from '@windmill/react-ui'
import { PeopleIcon } from '../../icons'
import RoundIcon from '../RoundIcon'
import { useTranslation } from 'react-i18next'

function PricingCard({ title, uniqId, type, value, active, enabled, callback }) {
  const { t } = useTranslation();
  return (
    <Card>
      <CardBody className="flex flex-col space-y-2">
        <div className="flex items-center">
          <RoundIcon
            icon={PeopleIcon}
            iconColorClass="text-orange-500 dark:text-orange-100"
            bgColorClass="bg-orange-100 dark:bg-orange-500"
            className="mr-4"
          />
          <div>
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">{title}</p>
            <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">{value}</p>          
          </div>
        </div>
        <Button block disabled={active || !enabled} onClick={(e) => {e.preventDefault(); callback(type,uniqId);}}>
          {active && <span>{t("Active plan")}</span>}
          {!active && <span>{t("Choose")}</span>}
        </Button>
      </CardBody>
    </Card>
  )
}

export default PricingCard
