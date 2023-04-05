package org.twentyninek.app.cupcake.newarchitecture.videoLooper;

public enum ReactEvents {
  EVENT_ON_END("onEnd"),
  EVENT_ON_LOAD("onLoad"),
  EVENT_ON_TRANSITION("onTransition");

  private final String mName;

  ReactEvents(final String name) {
    mName = name;
  }

  @Override
  public String toString() {
    return mName;
  }
}
