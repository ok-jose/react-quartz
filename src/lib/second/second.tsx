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
  return (
    <div>
      <Radio
        value={Mode.EVERY}
        checked={secondApi.isEverySelected()}
        onChange={secondApi.selectEvery}
      >
        每秒
      </Radio>
      <div key={Mode.INCREMENT}>
        <Radio
          value={Mode.INCREMENT}
          checked={secondApi.isIncrementSelected()}
          onChange={secondApi.selectIncrement}
        />
        <Increment
          disabled={secondApi.isIncrementControlsDisabled()}
          primaryOptions={selectOptions}
          primaryValue={secondApi.getIncrementPrimaryValue()}
          onPrimaryValueChange={secondApi.setIncrementPrimaryValue}
          secondaryOptions={selectOptions}
          secondaryValue={secondApi.getIncrementSecondaryValue()}
          onSecondaryValueChange={secondApi.setIncrementSecondaryValue}
        />
      </div>
      <div key={Mode.AND}>
        <Radio
          value={Mode.AND}
          checked={secondApi.isAndSelected()}
          onChange={secondApi.selectAnd}
        />
        具体秒：
        <AndComponent
          label={'具体秒'}
          options={selectOptions}
          disabled={secondApi.isAndControlsDisabled()}
          isValueSelected={(v) => secondApi.isSelectedAndValue(v)}
          onValueChange={secondApi.selectAndValue}
          onSelect={secondApi.selectAnd}
        />
      </div>
      <div key={Mode.RANGE}>
        <Radio
          value={Mode.RANGE}
          checked={secondApi.isRangeSelected()}
          onChange={secondApi.selectRange}
        />
        <RangeComponent
          disabled={secondApi.isRangeControlsDisabled()}
          primaryOptions={selectOptions}
          secondaryOptions={selectOptions}
          primaryValue={secondApi.getRangePrimaryValue()}
          secondaryValue={secondApi.getRangeSecondaryValue()}
          onPrimaryValueChange={secondApi.setRangePrimaryValue}
          onSecondaryValueChange={secondApi.setRangeSecondaryValue}
        />
      </div>
    </div>
  )
}
export { Second }
