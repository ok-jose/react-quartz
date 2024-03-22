import { Radio } from 'antd'
import { Type, Mode } from '@sbzen/cron-core'
import { useService } from '../utils/hooks/api-context/api-context.ts'
import { AndComponent, Increment, RangeComponent } from '../share'

const selectOptions = Array.from({ length: 60 }, (_, i) => i + 1).map((i) => {
  const str = i.toString()
  return { label: str, value: str }
})

const Second = () => {
  const secondApi = useService().getApi(Type.SECONDS)
  const handleOnChange = (e: any) => {
    const value = e.target.value
    switch (value) {
      case Mode.EVERY:
        secondApi.selectEvery()
        break
      case Mode.INCREMENT:
        secondApi.selectIncrement()
        break
      case Mode.AND:
        secondApi.selectAnd()
        break
      case Mode.RANGE:
        secondApi.selectRange()
        break
      default:
        break
    }
  }
  return (
    <Radio.Group onChange={handleOnChange}>
      <Radio value={Mode.EVERY}>每秒</Radio>
      <Radio value={Mode.INCREMENT}>
        <div>
          <Increment
            primaryOptions={selectOptions}
            primaryValue={secondApi.getIncrementPrimaryValue()}
            onPrimaryValueChange={secondApi.setIncrementPrimaryValue}
            secondaryOptions={selectOptions}
            secondaryValue={secondApi.getIncrementSecondaryValue()}
            onSecondaryValueChange={secondApi.setIncrementSecondaryValue}
          />
        </div>
      </Radio>
      <Radio value={Mode.AND}>
        <div>
          具体秒：
          <AndComponent
            label={'具体秒'}
            options={selectOptions}
            isValueSelected={(v) => secondApi.isSelectedAndValue(v)}
            onValueChange={secondApi.selectAndValue}
            onSelect={secondApi.selectAnd}
          />
        </div>
      </Radio>
      <Radio value={Mode.RANGE}>
        <div>
          <RangeComponent
            primaryOptions={selectOptions}
            primaryValue={secondApi.getRangePrimaryValue()}
            onPrimaryValueChange={secondApi.setRangePrimaryValue}
            secondaryOptions={selectOptions}
            secondaryValue={secondApi.getRangeSecondaryValue()}
            onSecondaryValueChange={secondApi.setRangeSecondaryValue}
          />
        </div>
      </Radio>
    </Radio.Group>
  )
}
export { Second }
