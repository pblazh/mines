(ns figwheel.connect.dev (:require [mines.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/mines.core.on-js-reload (apply js/mines.core.on-js-reload x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'mines.core/on-js-reload' is missing"))), :open-urls ["http://localhost:3449/index.html"], :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

