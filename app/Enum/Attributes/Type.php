<?php

	namespace App\Enum\Attributes;

	use Attribute;

	/**
	 *
	 */
	#[Attribute(Attribute::TARGET_CLASS_CONSTANT)]
	class Type
	{
		/**
		 * @param string $type
		 */
		public function __construct(public string $type) {}
	}
