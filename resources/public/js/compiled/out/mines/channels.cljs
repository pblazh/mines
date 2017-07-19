(ns mines.channels
  (:require-macros [cljs.core.async.macros :refer (go)])
  (:require [clojure.string :as s]
            [cljs.core.async :refer (chan put! <!)]))

(def EVENTCNANNEL (chan))

(defn start [events]
  (go
    (while true
      (let [[name data] (<! EVENTCNANNEL)]
        ((name events) data)))))
