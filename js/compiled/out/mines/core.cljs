(ns mines.core
  (:require-macros [mines.macros :refer [inspect breakpoint log]])

  (:require [clojure.string :as s]
            [reagent.core :as r]
            [cljs.core.async :refer (chan put! <!)]
            [mines.screens :as screens]
            [mines.game :refer (initial-state mark-square try-square try-complete)]
            [mines.channels :refer (EVENTCNANNEL start)]))
;; (enable-console-print!)

(defonce app-state (r/atom {:screen :screen-intro}))

(defn time-tick []
  (when (not (:complete @app-state)) 
    (js/setTimeout (fn []
                     (swap! app-state assoc :time (inc (:time @app-state)))
                     (time-tick))
                   1000)))

(defn start-game []
  (put! EVENTCNANNEL [:reset!])
  (put! EVENTCNANNEL [:set-screen! :screen-game])
  (put! EVENTCNANNEL [:start]))

(def EVENTS {:set-screen! #(swap! app-state assoc :screen %)
             :try-square! #(reset! app-state (-> (try-square @app-state %) try-complete))  
             :mark-square! #(reset! app-state (-> (mark-square @app-state %) try-complete))  
             :reset! #(reset! app-state (initial-state))
             :start time-tick})

;; (add-watch app-state :log #(log @app-state))

(defn app []
  (fn []
    (let [state @app-state]
      (cond
        (= (:screen state) :screen-intro) [screens/intro start-game state]
        (= (:screen state) :screen-game) [screens/game #(put! EVENTCNANNEL [:set-screen! :screen-intro]) state]
        :else [:div "screen doesn't exists"]))))

(r/render-component [app app-state] (.getElementById js/document "app"))
(start EVENTS)
(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
