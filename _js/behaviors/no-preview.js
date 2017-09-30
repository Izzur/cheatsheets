import $ from 'jquery'
import ready from 'dom101/ready'
import remove from 'dom101/remove'
import onmount from 'onmount'

import { isPreview } from '../helpers/preview'

/*
 * Behavior: Things to remove when preview mode is on
 */

onmount('[data-js-no-preview]', function (b) {
  if (isPreview()) {
    remove(this)
  }
})