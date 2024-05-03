import {setFailed} from '@actions/core'
const core={setFailed}
import { setupConnect, loadArgs } from './setup-connect'

export function run (): void {
  setupConnect(loadArgs())
    .catch((err: any) => {
      core.setFailed(err)
    })
}

run()
