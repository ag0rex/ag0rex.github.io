(ns figwheel.connect (:require [romtoff.core] [figwheel.client]))
(figwheel.client/start {:websocket-url "ws://localhost:3449/figwheel-ws", :on-jsload romtoff.core/on-js-reload, :build-id "dev"})

